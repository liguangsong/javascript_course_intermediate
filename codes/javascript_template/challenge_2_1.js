function Tool(name, usage){
    this.name = name;
    this.usage = usage;
    this.get_info = function() {console.log("This is " + this.name + ", the usage of it is " + this.usage + ".")}
}

cycling.get_info() 			// This is cycling, the usage of it is transport.