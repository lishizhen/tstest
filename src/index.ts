import axios from "axios";
interface IPerson {
  name: "xx";
  age: 18;
}
// type Test = keyof IPerson;
type IPartial = Partial<IPerson>;
// type IOmit = Omit<IPerson, "name">;
type IOmit = Omit<IPerson, "name">;

type t0 = ReturnType<() => number>;
type t1 = ReturnType<(s: string) => void>;

interface API {
  "/book/detail": {
    id: number;
  };
  "/book/comment": {
    id: number;
    comment: string;
  };
}

function request<T extends keyof API>(url: T, obj: API[T]) {
  return axios.post(url, obj);
}

request("/book/comment", {
  id: 1,
  comment: "aaa",
});

export {};
