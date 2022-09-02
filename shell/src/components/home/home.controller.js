import 'zone.js';

export default class HomeController {
	$scope;
	dataSubject;
	inputValue;
	users;
	secondComponentLoaded = false;
	constructor($log, $scope) {
		'ngInject';
		this.$log = $log;
		this.$scope = $scope;
	}

	onInputChanged() {
	  if (!this.secondComponentLoaded) {
		this.inputValue = '';
	  }
	  if (this.dataSubject) {
	    this.dataSubject.next(this.inputValue);
	  }
	}

	onClikLoadSecondComponent() {
		import('angular1/web-components').then(module => {
			console.log('Import Angular, - ', module);
			const { elementName, users$ } = module;
			const elm = document.createElement(elementName);
			const container = document.getElementById('ng-container');
			if (container.firstChild) {
				container.firstChild.remove();
			}
			if (!this.usersSubject) {
				users$.subscribe(users => {
					console.log('Got users from MFE', users);
					this.users = users;
					this.$scope.$apply();
				});
			}
			container.appendChild(elm);
		});
	}

	$onInit = () => {
		this.heading = 'Legacy Angular Project 1.8v';
		this.$log.info('Activated Home View.');

		import('angular1/another').then(module => {
			console.log('Import Angular, - ', module);
			const { data, elementName } = module;
			this.dataSubject = data;
			const elm = document.createElement(elementName);
			const container = document.getElementById('ng-container-another');
			if (container.firstChild) {
				container.firstChild.remove();
			}
			container.appendChild(elm);
			this.secondComponentLoaded = true;
		});
	};
}
