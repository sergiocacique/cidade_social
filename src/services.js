'use strict';
var rest_api = 'http://192.168.11.73/cidade_social_rest/api/v0';

angular.module('CidadeSocial')
.service('Pessoa', function($resource) {
    return $resource(rest_api+'/pessoas',{},{
        query : { method : 'GET', params:{}},
        create : { method : 'POST' },
        update : { method : 'PUT' },
        delete : { method : 'DELETE' }
    });
});

angular.module('CidadeSocial')
.service('Contato', function($resource) {
    return $resource(rest_api+'/contatos',{},{
        query : { method : 'GET', params:{}},
        create : { method : 'POST' },
        update : { method : 'PUT' },
        delete : { method : 'DELETE' }
    });
});
