const language = {
  name: "TypeScript",
  age: 8,
  extensions: ["ts", "tsx"],
};

function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
  let result = {} as Pick<T, K>;
  for (const key of keys) {
    if (typeof obj === "object" && obj !== null) {
      if (key in obj) {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

const ageAndExtensions = pickObjectKeys(language, ["age", "extensions"]);

type ProgrammingLanguage = {
  name: string;
};

function identity<T>(value: T): T {
  return value;
}

const result = identity({ name: "TypeScript" });

const resultWithConcreteType = identity<ProgrammingLanguage>({ name: "TypeScript" });

async function fetchApiTS<ResultType>(path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`);
  return response.json();
}

type User = {
  name: string;
};

// async function fetchApi<ResultType>(path: string): Promise<ResultType> {
//   const response = await fetch(`https://example.com/api${path}`);
//   return response.json();
// }

// const wrapper = async () => {
//   const data = await fetchApi<User[]>("/users");
// };


// async function fetchApi<ResultType>(path: string): Promise<ResultType> {
//   const response = await fetch(`https://example.com/api${path}`);

//   return response.json();
// }

// export const data = await fetchApi("/users");

// async function fetchApi<ResultType = Record<string, any>>(path: string): Promise<ResultType> {
//   const response = await fetch(`https://example.com/api${path}`);
//   return response.json();
// }

// const data = await fetchApi("/users");

// console.log(data.a);

// export {};
