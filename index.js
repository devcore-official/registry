module.exports = class Registry {
	constructor(){
		console.log("Registry");
	}
	objs = [
		/*
			head,tails,and latest vs specifc
			-- if using funC or highest abstraction, optionally can upgrade
			to next highest abstraction as the software ages.
		*/
		{name: "param", min:0, max: 50, chars:"a-z"},
			// {extends: "param"  		name:"namespace"},
			// {extends: "param", 		name:"model"},
			// {extends: "param", 		name:"protocol"},
			// {extends: "param", 	  	name:"url"},
		// {name: "program"}
		{name: "function"},
			{extends: "function",	name:"speC"},
			{extends: "function",	name:"blocK"},
			{extends: "function",	name:"defaulT"},
			{extends: "function",	name:"validatE"},
			{extends: "function",	name:"onError"},
			{extends: "function",	name:"example"},

			{extends: "function",       name:"funC", param:["speC","blocK","defaulT","validatE","onError","example"]},
				{extends: "funC",	    name:"claS", param:[""]},
					{extends: "claS",   name:"component"},
					{extends: "claS",	name: "DataStructure",alias:"DStruct"},
					{extends: "claS",		name:"api"},
						{extends: "api",		name:"service"},
							{extends: "service",	name:"system"},



			{extends: "???",				name:"file"},
				{extends: "file",			name:"folder"},


				{extends: "", 			name:"module"},
					{extends: "module",		name:"package"},
						{extends: "package",name:"repository"},
							{extends: "repository", name: "container", use:"kubernetes"}
	]
}