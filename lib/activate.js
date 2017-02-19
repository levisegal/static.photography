var inquirer = require('inquirer');
var Promise = require('bluebird');
var keys = require("./keys.json");

/**
 * 
 * @return {null}
 */
function loadCredentials(creds) {

	/**
	 *
	 * From array of credential keys, create question objects for inquirer
	 * 
	 * @param  {object}
	 * @return {array}
	 */
	function generateQuestionArray(creds) {
		console.log(creds)
	 	return Promise.map(creds, function mapToQuestionObj(cred){
			return {
				type: 'input',
				name: cred,
				message: 'What is your ' + cred
			};
		});
	}

	generateQuestionArray(creds)
	.then(function promptForCreds(questions) {
		return inquirer.prompt(questions);
	}).then(function storeAnswersInEnv(answers) {
		console.log(answers)
		return null;
	});
		
}

if (require.main === module) {
    loadCredentials(keys["aws"]);
} else {

}