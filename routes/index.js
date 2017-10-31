var express = require('express');
var request = require('request');
var value = '';
var router = express.Router();
recipes = [
	{
		name: 'Tuna Noodles and Peas',
		ingredient1: '1 box macaroni and cheese',
		ingredient2: '1 can cream of mushroom soup',
		ingredient3: '1 can tuna',
		ingredient4: '1 can peas',
		instructions: 'Prepare the Macaroni and cheese as instructed. Drain liquid from tuna and peas. add soup, peas and tuna to the macaroni and cheese. Stir till well mixed, serve.',
	},
	{
		name: 'Creamy Chicken Skillet with Stuffing',
		ingredient1: '1 pkg(16oz) Stove Top Stuffing Mix for Chicken',
		ingredient2: '6 boneless skinless chicken breat havels',
		ingredient3: '3 cups mixed vegetables',
		ingredient4: '1 can (10.75 oz) condensed cream of brocoli soup',
		instructions: 'Prepare stuffing mix. Heat large nonstick skillet on medium=-high heat. Add chicken and cover, cook 5-7 minutes on each side, Remove Chicken from skillet. Add vegetables, soup and 1/2 cup water to skillet; cover. Cook 6 minutes, or until heated through, stirring often. Return Chicken to skillet and cook till hot, serve with stuffing',
	},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { root: 'public' });
});

router.get('/cookbook', function(req, res)
{
	console.log("in Cookbook");
	res.send(recipes);
});

router.post('/cookbook', function(req, res) {
    console.log("In cookbook Post");
    console.log(req.body);
    recipes.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});
router.post('/recipes', function(req, res)
{
	console.log("in recipes post");
	value = req.body;
	res.end('{"success" : "Updated Successfully", "status" : 200}');
});

var recipesURL = 'http://food2fork.com/api/search?key={API_KEY}&q='
router.get('/recipes', function(req,res)
{
	console.log("In recipes");
	recipesURL = recipesURL+value;
	request(recipesURL).pipe(res);
});
module.exports = router;
