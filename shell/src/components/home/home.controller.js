import 'zone.js';

export default class HomeController {
	dataSubject;
	inputValue;
	constructor($log) {
		'ngInject';
		this.$log = $log;
	}

	onInputChanged() {
	  if (this.dataSubject) {
	    this.dataSubject.next(this.inputValue);
	  }
	}

	onClikLoadSecondComponent() {
		import('angular1/another').then(module => {
			console.log('Import Angular, - ', module);
			const { data } = module;
			this.dataSubject = data;
			const elm = document.createElement('angular2-element');
			const container = document.getElementById('ng-container-another');
			if (container.firstChild) {
				container.firstChild.remove();
			}
			container.appendChild(elm);
		});
	}

	$onInit = () => {
		this.heading = 'Legacy Angular Project 1.8v';
		this.$log.info('Activated Home View.');

		import('angular1/web-components').then(module => {
			console.log('Import Angular, - ', module);
			const elm = document.createElement('angular1-element');
			const container = document.getElementById('ng-container');
			container.appendChild(elm);
		});

	};
}
