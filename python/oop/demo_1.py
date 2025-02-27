class Vehicle :

    #constructor 
    def __init__(self,brand,model,year):
        self.brand = brand
        self.model = model
        self.year = year


    def get_info(self):
        return (f"{self.year} {self.brand} {self.model}")

car1 = Vehicle("Toyota","Corolla",2022)

car1.get_info()

#Class and instance variables
#Instance variables : Unique to each instance (self.barand,self.model ,etc)
#class variables : shares across all instances

class Animal :
    leg = 4 # class variable (share by all objects)

    def __init__(self,name,age,color,animal):
        self.name = name 
        self.age = age
        self.color = color
        self.animal = animal
    
    def get_info(self):
        print(f"name is {self.name}, color {self.color} , Age : {self.age} ,Animal : {self.animal}")

dog = Animal("ag net",4,'black','dog')
dog.get_info()




