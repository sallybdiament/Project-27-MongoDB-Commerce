db.resumoProdutos.insertOne({ franquia: "McDonalds", totalPrdutos: db.produtos.countDocuments() });

db.resumoProdutos.findOne({}, { _id: 0, franquia: 1, totalPrdutos: 1 });