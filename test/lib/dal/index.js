'use strict';
var config = require('../app/config');

module.exports = {
	mongo: {
		testEmployee: {
			'_id': 'ivan.ivanov',
			'name': 'Ivan',
			'lastName': 'Ivanov',
			'phones': [
				{ 'phoneType': 'home', 'phoneNumber': '+38062 111 1111' },
				{ 'phoneType': 'work', 'phoneNumber': '+38062 111 2222' },
				{ 'phoneType': 'mobile', 'phoneNumber': '+38093 111 1111' }
			],
			'emails': ['ivansquared@mail.com']
		},
		additionalTestEmployee: {
			'_id': 'john.doe',
			'name': 'John',
			'lastName': 'Doe',
			'phones': [
				{ 'phoneType': 'mobile', 'phoneNumber': '+xxxxx xxx xxxx' }
			],
			'emails': ['john@doe.com']
		},
		cases: {
			filter: 'filter={"name": "John"}',
			orderBy: 'orderBy={"name": -1}',
			per_page: 'per_page=1',
			page: 'page=2&per_page=1',
			q: 'q=Doe'
		},
		replaceEmployee: {
			'name': 'Vanyok',
			'lastName': 'Ivanoff'
		},
		updateForEmployee: {
			'name': 'Jane'
		}
	},
	mysql: {
		testContact: {
			'id': 1,
			'username': 'ivansquared@mail.com',
			'name': 'Ivan',
			'lastName': 'Ivanov'
		},
		additionalTestContact: {
			'id': 2,
			'username': 'john@doe.com',
			'name': 'John',
			'lastName': 'Doe'
		},
		replaceContact: {
			'name': 'Vanyok',
			'lastName': 'Ivanoff'
		},
		updateForContact: {
			'name': 'Jane'
		},
		cases: {
			q: 'q=Doe',
			fields: 'fields=name,lastName',
			filter: 'filter={"name":{"$like":"John"}}',
			per_page: 'perPage=1',
			page: 'page=2&perPage=1',
			orderBy: 'orderBy={"name": -1}'
		}
	},
	files: {
        testFile: {
            filePath: __dirname + '/files/picture.jpg',
            url: 'http://localhost:' + config.express.port + '/api/snapshots/myFirstSnapshot/picture',
            fileFormDataName: 'picture',
			length: 174540,
            snapshot: {
                "_id" : "myFirstSnapshot",
                "description" : "It's my first ever snapshot!",
                "tags" : [
                    "sky",
                    "sun",
                    "water"
                ]
            }
        },
        testFileLocal: {
            filePath: __dirname + '/files/picture.jpg',
            url: 'http://localhost:' + config.express.port + '/api/photos/myFirstPhoto/picture',
            fileFormDataName: 'picture',
            length: 174540,
            photo: {
                "_id" : "myFirstPhoto",
                "description" : "Wild nature",
                "tags" : [
                    "first",
                    "nature"
                ]
            }
        }
    }
};