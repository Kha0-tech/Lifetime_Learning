from demo_1 import Vehicle

#Inheritance 
class Car(Vehicle):
    def __init__(self,engine,type,brand,model,year,price,id):
        self.engine =engine
        self.type = type
        self.price = price
        self._id = id # private vraible
        super().__init__(brand,model,year,)

    #setter 
    def setId (self,id =0) :
        self._id = id

    #getter
    def getId(self):
        return self._id
    
    def get_info(self):
        info =super().get_info()

        print(f"""
                Car id {self._id} , price : {self.price}
                Model {self.model} , Year {self.year}
                Engine {self.engine}
              """)

myCar = Car(3.2,'SUV','toyota','Hilux',2023,25000,25)
print("Car id : ",myCar.getId())
myCar.get_info()