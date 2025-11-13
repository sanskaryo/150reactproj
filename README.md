

## Web3 Shopping cart

Link - https://github.com/sanskaryo/150reactproj
## Name - Sanskar Khandelwal
## section - ca
## roll no - 48



So we are a given to build a aimple webpage using react , it is a e commerce webpage with products , on top a navbar a working search functionality

Basically ek chota store page jisme products dikhe , upar navbar ho aur ek search bar working ho .
UI hame clone karna tha 100% so koi design change nhi kara , just jo video me tha vaise hi bana diya .

Isme hame mainly 3 cheeze chahiye thi –
Navbar component , ProductCard component aur ProductList component .
Ye teen banake pura layout ko easy ban jata h manage karna.

Sabse pahle maine Navbar.jsx banaya jisme left side me cart icon rakha (react-icons se import karke BsCart2)
fir right side me search box add kara with clear (X) icon and search wale icon .
Search bar ka text jab change hota h tab hamne query state update kari so products filter ho sake.

Uske baad ProductCard.jsx banaya jisme ek single card ka layout rakha , jise hum duplicate karenge for all products .
Isme image , title , price aur neeche ek simple button hota h.

Fir ProductList.jsx banaya jaha API se jo products aaye unko map karke card banana h .
FakeStoreAPI use ki h kyoki wahi required tha.
Products ko grid me arrange kiya using tailwind classes .

At last App.jsx me sabko import karke attach kar diya , jaise Navbar upar and fir heading "Store" aur fir product grid .
Search working h kyoki jo hum input me type karte h wo state update hoti h aur list filter ho jati h.




Thankyou 🤗