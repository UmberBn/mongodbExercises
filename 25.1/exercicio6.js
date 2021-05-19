db.clientes.aggregate([
  {
    $group: {
      _id: ['$sexo', '$endereco.uf'],
      total: {
        $sum: 1,
      },
    }, 
  },
]);
