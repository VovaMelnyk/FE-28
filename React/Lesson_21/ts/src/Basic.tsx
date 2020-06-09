import React from "react";

const Basic = () => {
  //imp
  //   let isLogin = true
  //   isLogin = 3
  //exp
  //   let isLogin: boolean = true;
  //   isLogin = 4;

  // number
  //   let decimal: number = 10;
  //   let hex: number = 0xf00d;

  //string
  //   let color: string = "blue";
  //   color = 4

  // few types
  //   let color: number | string = "blue";
  //   color = 0xf00d;
  //   color = 4;

  // Arrays
  //   let names: string[] = ["Bob", "Patrick", "Tom"];
  //   names.push(3)

  //   let names: Array<string> = ["Bob", "Patrick", "Tom"];
  //   names.push(3);

  // Tuple
  //   let user: [string, number] = ["Bob", 24];
  //   console.log(user);
  //   user.push(false);

  //Enum
  //   enum Priority {
  //     Low,
  //     Medium,
  //     High,
  //   }

  //   enum Priority {
  //     Low = 1,
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

  // any
  //   let userName: any = "Bob";
  //   userName = 4;
  //   console.log(userName);

  // void

  // object
  //   let client: object = { age: 5, name: "Bob" };
  //   client = [1, 2, 3];
  //   client = 4;
  //   console.log(client);

  // Interfaces

  //   interface User {
  //     firstName: string;
  //     lastName: string;
  //     age: number;
  //     email: string;
  //   }

  //   const user: User = {
  //     firstName: "Bob",
  //     lastName: "User",
  //     age: 32,
  //     email: "user@gmail.com",
  //   };

  // Optional properties

  //   interface User {
  //     firstName: string;
  //     lastName?: string;
  //     age?: number;
  //     email: string;
  //   }

  // const user: User = {
  //   firstName: "Bob",
  //   email: "user@gmail.com",
  // };

  //   console.log(user);

  // readOnly
  // interface User {
  //   firstName: string;
  //   readonly email: string;
  // }

  //   const user: User = {
  //     firstName: "Bob",
  //     email: "user@gmail.com",
  //   };

  //   user.email = "qeqw";

  //   console.log(user);

  //   Extending Interfaces

  //   interface User {
  //     firstName: string;
  //     email: string;
  //   }

  //   interface PremiumUser extends User {
  //     isPremium: boolean;
  //   }

  //   const user: PremiumUser = {
  //     firstName: "Bob",
  //     email: "user@gmail.com",
  //     isPremium: true,
  //   };

  //   interface User {
  //     firstName: string;
  //     email: string;
  //   }

  //   interface PremiumUser {
  //     isPremium: boolean;
  //   }

  //   interface SuperUser extends User, PremiumUser {
  //     age: number;
  //   }

  //   const user: SuperUser = {
  //     firstName: "Bob",
  //     email: "user@gmail.com",
  //     isPremium: true,
  //     age: 23,
  //   };

  //   console.log(user);

  // Methods in interfaces
  //   interface User {
  //     firstName: string;
  //     email: string;
  //   }

  //   interface PremiumUser {
  //     isPremium: boolean;
  //   }

  //   interface SuperUser extends User, PremiumUser {
  //     age: number;
  //     hello(): void;
  //   }

  //   const hello = () => {
  //   };

  //   const user: SuperUser = {
  //     firstName: "Bob",
  //     email: "user@gmail.com",
  //     isPremium: true,
  //     age: 23,
  //     hello: hello,
  //   };

  //   console.log(user);
  //   user.hello();

  // Functions

  //   const add = (a, b) => {
  //     return a + b;
  //   };

  //   console.log(add(4, 5));

  //   const add = (a: number, b: number): number => {
  //     return a + b;
  //   };

  //   console.log(add(4, 5));

  //   const add = (a: number, b: number): void => {
  //     console.log(a + b);
  //   };

  //   add(4, 5);

  //   interface User {
  //     name: string;
  //     age: number;
  //   }

  //   const users: Array<User> = [
  //     { name: "Bob", age: 21 },
  //     { name: "Patrick", age: 30 },
  //     { name: "Moly", age: 35 },
  //   ];

  //   const filterUser: Array<User> = users.filter((user) => user.age < 30);
  //   console.log(filterUser);

  //   const filterUser = users.filter((user: User) => user.age < 30);
  //   console.log(filterUser);

  // default parameters

  //   function buildName(firstName: string, lastName = "Smith") {
  //     return `${firstName} ${lastName}`;
  //   }

  //   let result = buildName("Bob");
  //   let result = buildName("Bob", "Adams", "Sr.");
  //   let result = buildName("Bob", "Adams");
  //   console.log(result);

  // Generic

  //   const promiseResult = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve("UserName");
  //     }, 1000);
  //   });

  //   promiseResult.then((data) => console.log(data));

  //   const promiseResult: Promise<string> = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve("UserName");
  //     }, 1000);
  //   });

  //   promiseResult.then((data) => console.log(data.toLocaleLowerCase().trim()));

  //   function mergeObjects(a: object, b: object) {
  //     // return Object.assign({}, a, b);
  //     return { ...a, ...b };
  //   }

  // const result = mergeObjects({ name: "Bob" }, { age: 12 });
  // //   console.log("Basic -> result", result);
  // console.log("Basic -> result", result.age);

  //   ======================================================================

  //   interface Name {
  //     name: string;
  //   }

  //   interface Age {
  //     age: number;
  //   }

  //   function mergeObjects(a: Name, b: Age) {
  //     return Object.assign({}, a, b);
  //     // return { ...a, ...b };
  //   }

  //   const result = mergeObjects({ name: "Bob" }, { age: 12 });
  //   const result1 = mergeObjects({ model: "Bob" }, { year: 12 });

  //   //   console.log("Basic -> result", result);
  //   console.log("Basic -> result", result.name);

  //   ======================================================================

  //   function mergeObjects<T, R>(a: T, b: R) {
  //     return Object.assign({}, a, b);
  //   }

  //   const result = mergeObjects({ name: "Bob" }, { age: 12 });
  //   const result2 = mergeObjects({ model: "Volvo" }, { year: 2020 });
  //   const result3 = mergeObjects("qqq", "www");
  //   //   console.log("Basic -> result", result);
  //   console.log("Basic -> result", result.age);
  //   console.log("Basic -> result2", result2.year);
  //   console.log("Basic -> result3", result3);

  //   function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  //     return Object.assign({}, a, b);
  //     // return { ...a, ...b };
  //   }

  //   const result = mergeObjects({ name: "Bob" }, { age: 12 });
  //   const result2 = mergeObjects({ model: "Volvo" }, { year: 2020 });
  //   //   console.log("Basic -> result", result);
  //   console.log("Basic -> result", result.age);
  //   console.log("Basic -> result2", result2.year);

  //   ======================================================================

  //   function getObjectValue(obj, key) {
  //     return obj[key];
  //   };

  //   const user = {
  //     name: "Bob",
  //     age: "21",
  //   };

  //   console.log(getObjectValue(user, "name"));
  //   console.log(getObjectValue(user, "age"));
  //   console.log(getObjectValue(user, "job"));

  //   ======================================================================

  //   function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  //     return obj[key];
  //   }

  //   const user = {
  //     name: "Bob",
  //     age: "21",
  //   };

  //   console.log(getObjectValue(user, "name"));
  //   console.log(getObjectValue(user, "age"));
  //   console.log(getObjectValue(user, "job"));

  return (
    <div>
      <h1>BASIC</h1>
    </div>
  );
};

export default Basic;
