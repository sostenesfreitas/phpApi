angular.module('todoApp', [])
  
  .controller('TodoListController', ['$scope',function ($scope){
    
	$scope.item = {};   
    $scope.pessoa = [
	{
		nome:'George',
		status:'Falta pagar',
		valorPago:'não informado',
		formaDePagamento:'não informado',
		data:'segunda-feira',
		credito:'nenhum',
		done:false
	},

	{	
		nome:'Henrique',
		status:'Pagou',
		valorPago:'R$42,00',
		formaDePagamento:'Dinheiro',
		data:'segunda-feira',
		credito:'nenhum',
		done:false
	}
		];
		 $scope.cadastra = function(){
			   $scope.pessoa.push({ nome:  	$scope.item.pesNome,
									 status: 	$scope.item.pesStatus,
									 valorPago: $scope.item.pesValorPago,
									 formaDePagamento: $scope.item.pesFormaDePagamento,
									 data: 		$scope.item.pesData,
									 credito: 	$scope.item.pesCredito,
									 done:false
									 });
			   
			   $scope.item.pesNome = '';
			   $scope.item.pesStatus = '';
			   $scope.item.pesValorPago = '';
			   $scope.item.pesFormaDePagamento = '';
			   $scope.item.pesData = '';
			   $scope.item.pesCredito = '';
		   };

		   $scope.remover = function(){
			   var oldPessoa = $scope.pessoa;
			   $scope.pessoa = [];
			   angular.forEach(oldPessoa, function(p) {
					if (!p.done) $scope.pessoas.push(p);
			   })
		   };

		    $scope.deleteItem = function(index){
        $scope.pessoa.splice(index, 1);
    };

		  
		 $scope.editarItem = function(index){
        $scope.item = $scope.pessoa[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
    };
		}]);