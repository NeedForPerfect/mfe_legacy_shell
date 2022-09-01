import 'zone.js';

export default class HomeController {
	dataSubject;
	constructor($log) {
		'ngInject';
		this.$log = $log;
	}

	onClickContainer() {
		import('angular1/another').then(module => {
			console.log('Import Angular, - ', module);
			const { data } = module;
			this.dataSubject = data;
			this.dataSubject.subscribe((res) => console.log('RES', res));
			const elm = document.createElement('angular2-element');
			const container = document.getElementById('ng-container-another');
			container.appendChild(elm);
		});
	}

	changeValue() {
		this.dataSubject.next('NewValue', new Date().getTime());
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
