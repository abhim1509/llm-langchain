import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

const execute = async () => {
  const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo-1106",
    openAIApiKey: "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",
  });

  const prompt = ChatPromptTemplate.fromTemplate(
    `What are three good names for a company that makes {product}?`
  );
  const outputParser = new StringOutputParser();

  //Equivalent to pipe method.
  const nameGenerationChain = RunnableSequence.from([
    prompt,
    model,
    outputParser,
  ]);

  const result = await nameGenerationChain.invoke({
    product: "fancy cookies",
  });

  console.log(result);
};

execute();
