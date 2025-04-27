const ClientModal = require("../jsonModels/clientModal");

const getClientByDateTime = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;
    console.log(startDate, endDate)
    const users = await ClientModal.aggregate([
      {
        $addFields: {
          createDateISO: { $toDate: "$createDate" }
        }
      },
      {
        $match: {
          createDateISO: {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
          }
        }
      }
    ]);

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong while getting clients!");
  }
};

module.exports = { getClientByDateTime };









// const ClientModal = require("../jsonModels/clientModal");

// const getClientByDateTime = async (req, res) => {
//   try {
//     const { startDate, endDate } = req.body;
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const reverse = req.query.reverse === "true";

//     const skip = (page - 1) * limit;
//     const sortOrder = reverse ? -1 : 1;

//     const matchStage = {
//       $addFields: {
//         createDateISO: { $toDate: "$createDate" }
//       }
//     };

//     const filterStage = {
//       $match: {
//         createDateISO: {
//           $gte: new Date(startDate),
//           $lte: new Date(endDate)
//         }
//       }
//     };

//     const pipeline = [
//       matchStage,
//       filterStage,
//       { $sort: { _id: sortOrder } }, // _id sorting
//       { $skip: skip },
//       { $limit: limit }
//     ];

//     const clients = await ClientModal.aggregate(pipeline);

//     // უნდა დაითვალო მხოლოდ ფილტრირებულების რაოდენობა
//     const totalClients = await ClientModal.aggregate([
//       matchStage,
//       filterStage,
//       { $count: "count" }
//     ]);

//     const total = totalClients[0]?.count || 0;

//     return res.status(200).send({
//       data: clients,
//       pagination: {
//         page,
//         limit,
//         totalClients: total,
//         totalPages: Math.ceil(total / limit),
//         reverse,
//       }
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Something went wrong while getting clients!");
//   }
// };

// module.exports = { getClientByDateTime };













// const ClientModal = require("../jsonModels/clientModal");

// const getClientByDateTime = async (req, res) => {
//   try {
//     const { startDate, endDate } = req.body;
//     console.log(startDate, endDate)
//     const users = await ClientModal.aggregate([
//       {
//         $addFields: {
//           createDateISO: { $toDate: "$createDate" }
//         }
//       },
//       {
//         $match: {
//           createDateISO: {
//             $gte: new Date(startDate),
//             $lte: new Date(endDate)
//           }
//         }
//       }
//     ]);

//     return res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Something went wrong while getting clients!");
//   }
// };

// module.exports = { getClientByDateTime };













// const ClientModal = require("../jsonModels/clientModal");

// const getClientByDateTime = async (req, res) => {
//     try {
//       const { startDate, endDate } = req.body;
//       const users = await ClientModal.find()


//       const user = users.filter(item => {
//             const itemDate = new Date(item.createDate).getTime();
//             return itemDate >= new Date(startDate).getTime() && itemDate <= new Date(endDate).getTime();
//         });
  
//       return res.status(200).send(user);
//     } catch (error) {
//       console.log(error)
//       return res.status(500).send("Something went wrong while getting cars!");
//     }
// };

// module.exports = {getClientByDateTime}
