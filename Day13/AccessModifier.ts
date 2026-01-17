//access Modifiers-public,private,protected
//public-default-accessible everywhere
//private-only within the class
//protected-within the class and child class

class Locator{

    // function name(params:type) {
        
    // }
   public css:string="#id"
   public loactorType(){
console.log("locatortype method in locator class")
}

private xpath(){
    console.log("xpath method in locator class")
}

protected assertion(){
    console.log("assertion method in locator class")
}

public access(){
    this.xpath()
    this.assertion()
}

}

let object=new Locator()
object.loactorType()
console.log(object.css)
object.access()
