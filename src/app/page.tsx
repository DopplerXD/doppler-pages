"use client";

import { type CSSProperties, useEffect, useState } from "react";
import questionsData from "@/data/mbti-questions.json";
import personalitiesData from "@/data/mbti-personalities.json";

type Question = {
  id: number;
  dimension: string;
  question: string;
  optionA: { text: string; value: string };
  optionB: { text: string; value: string };
};

type Answers = Record<number, string>;

type Personality = {
  blockName: string;
  nickname: string;
  description: string;
  traits: string[];
};

const questions = questionsData as Question[];
const personalities = personalitiesData as Record<string, Personality>;
const imageExtensions = ["png", "gif", "webp", "jpg", "jpeg", "svg"];
export default function Home() {
  const [phase, setPhase] = useState<"start" | "questions" | "loading" | "result">("start");
  const [answers, setAnswers] = useState<Answers>({});
  const [progress, setProgress] = useState(0);
  const [resultType, setResultType] = useState("");
  const [imageFailed, setImageFailed] = useState(false);
  const [imageExtensionIndex, setImageExtensionIndex] = useState(0);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  useEffect(() => {
    setImageFailed(false);
    setImageExtensionIndex(0);
  }, [resultType]);

  const getCounts = () => {
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer) {
        counts[answer as keyof typeof counts] += 1;
      }
    });

    return counts;
  };

  const calculateResult = () => {
    const counts = getCounts();

    return (
      (counts.E >= counts.I ? "E" : "I") +
      (counts.S >= counts.N ? "S" : "N") +
      (counts.T >= counts.F ? "T" : "F") +
      (counts.J >= counts.P ? "J" : "P")
    );
  };

  const getBreakdown = (type: string) => {
    const counts = getCounts();

    return [
      `${type[0]}/${type[0] === "E" ? "I" : "E"} ${counts[type[0] as keyof typeof counts]}:${counts[(type[0] === "E" ? "I" : "E") as keyof typeof counts]}`,
      `${type[1]}/${type[1] === "S" ? "N" : "S"} ${counts[type[1] as keyof typeof counts]}:${counts[(type[1] === "S" ? "N" : "S") as keyof typeof counts]}`,
      `${type[2]}/${type[2] === "T" ? "F" : "T"} ${counts[type[2] as keyof typeof counts]}:${counts[(type[2] === "T" ? "F" : "T") as keyof typeof counts]}`,
      `${type[3]}/${type[3] === "J" ? "P" : "J"} ${counts[type[3] as keyof typeof counts]}:${counts[(type[3] === "J" ? "P" : "J") as keyof typeof counts]}`,
    ];
  };

  const handleSubmit = () => {
    const result = calculateResult();
    setResultType(result);
    setPhase("loading");

    const duration = 2400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const ratio = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - ratio) * (1 - ratio);
      const wobble = Math.sin(elapsed / 120) * 4 * (1 - ratio);
      const nextProgress = Math.min(Math.max(eased * 100 + wobble, 0), 99);

      setProgress(nextProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setTimeout(() => setPhase("result"), 250);
      }
    };

    requestAnimationFrame(animate);
  };

  const resetTest = () => {
    setPhase("start");
    setAnswers({});
    setProgress(0);
    setResultType("");
  };

  const result = resultType ? personalities[resultType] : null;
  const resultBreakdown = resultType ? getBreakdown(resultType) : [];
  const resultImageSrc = resultType
    ? `/images/blocks/${resultType.toLowerCase()}.${imageExtensions[imageExtensionIndex]}`
    : "";

  return (
    <main className="min-h-screen mc-grid">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
        {phase === "start" && (
          <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center">
            <div className="pixel-panel overflow-hidden p-6 md:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6f8f48] bg-[#1f2b14] px-3 py-1 text-sm font-semibold text-[#cde49c]">
                    <span className="h-2.5 w-2.5 rounded-sm bg-[#8fca5d]" />
                    MB = Minecraft Block
                  </div>
                  <h1 className="mb-4 text-4xl font-black uppercase tracking-[0.08em] text-[#f2f0d8] md:text-6xl">
                    MC 方块人格测试
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-[#d8d5b8] md:text-lg">
                    这不是传统 MBTI 的包装重涂，而是一套完全围绕 Minecraft
                    游戏内行为设计的方块人格测试。回答 32 道二选一题，测测你在服务器里更像哪一种方块。
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="rounded-lg border border-[#6b7d42] bg-[#28361a] px-4 py-3 text-sm text-[#ebf2d0]">
                      <span className="block text-2xl font-black text-[#9fe870]">32</span>
                      道游戏内行为题
                    </div>
                    <div className="rounded-lg border border-[#8f6b34] bg-[#342512] px-4 py-3 text-sm text-[#f4e3bf]">
                      <span className="block text-2xl font-black text-[#ffc86a]">16</span>
                      个 MC 方块人格
                    </div>
                    <div className="rounded-lg border border-[#5a6d7d] bg-[#18232f] px-4 py-3 text-sm text-[#d6e7f4]">
                      <span className="block text-2xl font-black text-[#7dc7ff]">4</span>
                      组 MBTI 维度
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button onClick={() => setPhase("questions")} className="pixel-button text-base md:text-lg">
                      开始挖掘人格
                    </button>
                    <p className="text-sm text-[#b8c19a]">预计耗时 3-5 分钟，适合轻松测着玩。</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
                  {[
                    ["命令方块", "#d79f51", "#6f421a"],
                    ["苔藓块", "#6ea34d", "#244420"],
                    ["附魔台", "#6d4bc9", "#1f1538"],
                    ["萤石", "#d6bf63", "#55461a"],
                  ].map(([name, topColor, sideColor]) => (
                    <div key={name} className="block-showcase">
                      <div
                        className="block-cube"
                        style={
                          {
                            "--block-top": topColor,
                            "--block-side": sideColor,
                          } as CSSProperties
                        }
                      >
                        <span>{name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {phase === "questions" && (
          <section className="pb-10">
            <div className="pixel-panel sticky top-4 z-10 mb-6 p-4 md:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b9c690]">Minecraft Block Personality Test</p>
                  <h2 className="mt-1 text-2xl font-black text-[#f3f1dc] md:text-3xl">选择最像你在 MC 里的真实习惯</h2>
                </div>
                <div className="text-sm text-[#d5d1b5]">
                  已回答 <span className="font-black text-[#9fe870]">{answeredCount}</span> / {questions.length}
                </div>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-none border border-[#5b6a35] bg-[#1a2211]">
                <div
                  className="h-full bg-[linear-gradient(90deg,#8fca5d_0%,#d8b45c_100%)] transition-all duration-200"
                  style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-5">
              {questions.map((q) => (
                <article key={q.id} className="pixel-panel p-5 md:p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-md border border-[#799349] bg-[#243217] px-2.5 py-1 text-xs font-black uppercase tracking-[0.15em] text-[#d6f0a4]">
                      Q{q.id}
                    </span>
                  </div>
                  <p className="mb-4 text-lg font-semibold leading-8 text-[#f2f0db]">{q.question}</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <button
                      onClick={() => setAnswers({ ...answers, [q.id]: q.optionA.value })}
                      className={`answer-card ${
                        answers[q.id] === q.optionA.value ? "answer-card-selected" : ""
                      }`}
                    >
                      <span className="answer-prefix">A</span>
                      <span>{q.optionA.text}</span>
                    </button>
                    <button
                      onClick={() => setAnswers({ ...answers, [q.id]: q.optionB.value })}
                      className={`answer-card ${
                        answers[q.id] === q.optionB.value ? "answer-card-selected" : ""
                      }`}
                    >
                      <span className="answer-prefix">B</span>
                      <span>{q.optionB.text}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {allAnswered && (
              <div className="mt-8 flex justify-center">
                <button onClick={handleSubmit} className="pixel-button text-base md:text-lg">
                  提交并生成方块人格
                </button>
              </div>
            )}
          </section>
        )}

        {phase === "loading" && (
          <section className="flex min-h-[70vh] items-center justify-center">
            <div className="pixel-panel w-full max-w-2xl p-8 text-center md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b2bf88]">Analyzing Build Pattern</p>
              <h2 className="mt-3 text-3xl font-black text-[#f1efd7] md:text-4xl">正在把你的操作习惯压成一块方块...</h2>
              <p className="mx-auto mt-3 max-w-xl text-[#d5d1b5]">
                正在统计你的组队倾向、建造偏好、决策方式和行动节奏，看看你更像服务器里的哪种核心方块。
              </p>
              <div className="mt-8 h-4 overflow-hidden border border-[#5b6a35] bg-[#1b2111]">
                <div
                  className="h-full bg-[linear-gradient(90deg,#7ec05b_0%,#d7b560_50%,#87d1ff_100%)] transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#f0e6be]">{Math.round(progress)}%</p>
            </div>
          </section>
        )}

        {phase === "result" && result && (
          <section className="animate-fade-in pb-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="pixel-panel p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8c593]">Your Minecraft Block Personality</p>
                <div className="mt-3 flex flex-wrap items-end gap-3">
                  <h2 className="text-5xl font-black tracking-[0.08em] text-[#f4f1de] md:text-6xl">{resultType}</h2>
                  <span className="mb-1 rounded-md border border-[#6d6241] bg-[#2e2718] px-3 py-1 text-sm font-semibold text-[#f1dfa6]">
                    仍对应经典 MBTI 16 型
                  </span>
                </div>
                <p className="mt-4 text-3xl font-black text-[#9fe870] md:text-4xl">{result.blockName}</p>
                <p className="mt-2 text-lg font-semibold text-[#ebc86e]">{result.nickname}</p>
                <p className="mt-6 text-base leading-8 text-[#ddd8bc] md:text-lg">{result.description}</p>

                <div className="mt-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b0bc85]">核心标签</p>
                  <div className="flex flex-wrap gap-3">
                    {result.traits.map((trait) => (
                      <span key={trait} className="rounded-md border border-[#657840] bg-[#243117] px-3 py-2 text-sm font-semibold text-[#def4ae]">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="pixel-panel flex min-h-[320px] flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b0bc85]">Block Card</p>
                      <p className="mt-2 text-xl font-black text-[#f1eed8]">{result.blockName}</p>
                    </div>
                    <span className="rounded-md border border-[#556b88] bg-[#162331] px-3 py-1 text-sm font-black text-[#8ad0ff]">
                      {resultType}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-1 items-center justify-center">
                    <div className="result-block">
                      {!imageFailed ? (
                        <img
                          src={resultImageSrc}
                          alt={result.blockName}
                          className="result-block-image"
                          onError={() => {
                            if (imageExtensionIndex < imageExtensions.length - 1) {
                              setImageExtensionIndex((current) => current + 1);
                              return;
                            }

                            setImageFailed(true);
                          }}
                        />
                      ) : (
                        <div className="result-block-face">
                          <span>{result.blockName}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-center text-sm text-[#c8c3a7]">MB 在这里代表 Minecraft Block，不是职场自我介绍模板。</p>
                </div>

                <div className="pixel-panel p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b0bc85]">维度结果</p>
                  <div className="mt-4 grid gap-3">
                    {resultBreakdown.map((item) => (
                      <div key={item} className="rounded-md border border-[#5c6d35] bg-[#1d2712] px-4 py-3 text-sm font-semibold text-[#e1f0b7]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button onClick={resetTest} className="pixel-button-secondary">
                    重新测试
                  </button>
                  <button onClick={() => setPhase("questions")} className="pixel-button-secondary">
                    返回查看题目
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
