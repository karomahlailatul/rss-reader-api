import ConnectDB, { prisma } from "../configs/db";

export const createUser = async (email: any, password: any) => {
  ConnectDB();
  const ExecuteDB = await prisma.user.create({
    data: { email: email, password: password, role_id: 3, fullname: "", phone: "" },
  });
  return ExecuteDB;
};

// export const getUser = async (email: string) => {
//   ConnectDB();
//   const ExecuteDB = await prisma.user.findUnique({
//     where: { email: email }
//   });
//   console.log(ExecuteDB)
//   return ExecuteDB;
// };

