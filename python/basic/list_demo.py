#In python , a list is a collection that is orderd ,mutatble (changeable ), allow duplicate values 


my_list = [1,10,20,30,40]

my_list.append(50) # append() list နောက်ဆုံး Element တစ်ခု့ထည့်ပေးပါတယ်

if 4 in my_list:
    my_list.remove(4)  #remove() one argument တစ်ခုထည့်ပေးရပါတယ် list ထဲ့မှာရှိတာဖယ်ရှားပေးသွားမှာ
else :
    print('4 is not in the list')


my_list.insert(3,500) # insert(index,element ) သတ်မှတထားသည် index , element ထည့်ပေးရပါတယ္

my_list.pop() # pop() နောက်ဆုံးelement ဖယ်ရှာပေးသွားမှာပါ

my_list.sort()


print(my_list.count(40))

lst = ["a",'b','c','d']
lst.extend(my_list)

print(lst)
#lst.clear() 






