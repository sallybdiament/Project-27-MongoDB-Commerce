// db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos: db.produtos.countDocuments() });

// db.resumoProdutos.findOne({}, { _id: 0, franquia: 1, totalProdutos: 1 });

db.resumoProdutos.insertOne({ 
    franquia: "McDonalds", totalProdutos: db.produtos.countDocuments({}) });

db.resumoProdutos.findOne({}, { _id: 0 });