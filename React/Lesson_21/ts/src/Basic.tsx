import React from "react";

const Basic = () => {
  //   let isLogin: boolean = true;
  //   isLogin = 3;
  //   console.log(isLogin);

  //   let isLogin = 3;
  //   isLogin = "1";

  //   let age: number = 3;
  //   age = '12'

  //   let name: string = "Bob";

  //   let age: number | string = 2;
  //   age = "qweqwe";

  //   const name: string[] = ["Bob", "Patrick", "Max"];
  //   const name: Array<string> = ["Bob", "Patrick", "Max"];

  //   const user: [string, number] = ["Bob", 12];

  //   enum Priority {
  //     Low,
  //     Medium,
  //     High,
  //   }

  //   enum Priority {
  //     Low = "LOW",
  //     Medium = "MEDIUM",
  //     High = "HIGH",
  //   }

  //   console.log(Priority.Low);
  //   console.log(Priority.Medium);
  //   console.log(Priority.High);

  //   let number: any = 4;
  //   number = false;

  //   let user: object = {
  //     name: "Bob",
  //     age: 12,
  //   };

  // void

  // interface

  //   interface User {
  //     firstName: string;
  //     lastName?: string;
  //     age: number;
  //     readonly email: string;
  //     agree?: boolean;
  //   }

  //   interface PremiumUser extends User {
  //     isPremium: boolean;
  //     readonly secretPhrase: string;
  //     hello(): void;
  //   }

  // const user: User = {
  //   firstName: "Bob",
  //   // lastName: "User",
  //   age: 12,
  //   email: "user@gmail.com",
  //   // agree: true,
  // };
  //   //   console.log(user.email);
  //   user.email = "Hello";

  //   const hello = () => {
  //   };

  //   const user: PremiumUser = {
  //     firstName: "Bob",
  //     lastName: "User",
  //     age: 12,
  //     email: "user@gmail.com",
  //     agree: true,
  //     isPremium: true,
  //     secretPhrase: "Hello world",
  //     hello,
  //   };

  //   function add(a: number, b: number): number {
  //     return a + b;
  //   }

  //   add(1, 2);
  //   add(1, 3);

  //   function nameBuilder(name: string, lastName: string = "Smith"): string {
  //     return `${name}  ${lastName}`;
  //   }
  //   console.log(nameBuilder("Bob", "S"));

  //   interface User {
  //     name: string;
  //     age: number;
  //   }

  //   const users: Array<User> = [
  //     { name: "Bob", age: 12 },
  //     { name: "Patrick", age: 15 },
  //     { name: "Max", age: 18 },
  //   ];

  //   const filteredUsers: User[] = users.filter((user: User) => user.age > 15);

  //   interface Name {
  //     name: string;
  //   }

  //   interface Age {
  //     age: number;
  //   }

  //   function mergeObj(a: Name, b: Age) {
  //     return Object.assign({}, a, b);
  //   }

  function mergeObj<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b);
  }

  const result = mergeObj({ name: "Bob" }, { age: 23 });
  const result2 = mergeObj({ model: "Volvo" }, { year: 2020 });
  //   const result3 = mergeObj("qqq", "www");
  console.log(result);
  console.log(result.name);
  console.log(result.age);
  console.log(result2.model);
  console.log(result2.year);
  //   console.log(result3);

  function getValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
  }

  return (
    <div>
      <h1>BASIC</h1>
    </div>
  );
};

export default Basic;
