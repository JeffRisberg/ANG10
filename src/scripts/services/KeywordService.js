import Keyword from '../model/Keyword';

export default class KeywordService {

	/*
	  The below annotation will be processed by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($q) {
		this._$q = $q;
	}

	getKeyword() {
		return this._$q.when(new Keyword());
	}
}