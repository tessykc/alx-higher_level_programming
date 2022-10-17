Python 3.11.0b3 (main, Jun  1 2022, 13:29:14) [MSC v.1932 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
class User:
    id = 89
    name = "no name"
    _password = None

    
class User:
    id = 89
    name = "no name"
    __password = None

    def __init__(self, new_name=None):
        self.is_new = True
        if new_name is not None:
            self.name = new_name

            
User
<class '__main__.User'>
id
<built-in function id>
u = User()
u.is_new
True
u.id
89
u = User("John")
u.name
'John'
u = User()
u.name
'no name'
