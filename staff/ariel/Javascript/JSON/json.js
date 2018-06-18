


var obj = {key1: "a", key2: "b", key3: ["a","b"]}

{key1: "a", key2: "b", key3: Array(2)}
var obj = {key1: "a", key2: "b", key3: ["a","b"], key4: {key11: "aa", key22:"bb"}}

var data = JSON.stringify({"key1": "a", "key2": "b", "key3": ["a","b"], "key4": {"key11": "aa", "key22":"bb"}})


typeof data

var objectAgain = JSON.parse(data)

//objectAgain
{key1: "a", key2: "b", key3: Array(2), key4: {…}}key1: "a",key2: "b",key3: (2) ["a", "b"],key4: {key11: "aa", key22: "bb"}

var person = {name: "Cris", lastname:"DS", age:"31"}
var data = JSON.stringify(person)

//"{"name":"Cris","lastname":"DS","age":"31"}"


var response = "{\"status\":\"OK\", \"message\":\"Persona guardada correctamente\"}"
JSON.parse(response)
//{status: "OK", message: "Persona guardada correctamente"}message: "Persona guardada correctamente"status: "OK"

typeof JSON.parse(response)
//"object"

var dataResponse = JSON.parse(response)

//dataResponse
{status: "OK", message: "Persona guardada correctamente"}


