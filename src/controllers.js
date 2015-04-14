'use strict';

angular.module('CidadeSocial')
.controller('PessoasController', function(Pessoa, $scope, $location, $routeParams) {
    $scope.index = function(){
        // this.search = function(term){
        //     $location.search({'search':term});
        // }
        // this.response = Pessoa.query($location.search());
    }
    $scope.view = function(){
        this.response = Pessoa.query({id:$routeParams.id});
    }
    $scope.add = function(){
        this.submit = function(){
            alert('add');
        }
    }
    $scope.edit = function(id){
        $location.search('id', id);

        this.submit = function(){
            alert('edit');
        }
    }
    $scope.delete = function(id){

    }
});
