

1. parseAndCount
	*INPUT
```
[
"ITEM0001 x 1", 
"ITEM0013 x 2", 
"ITEM0022 x 1"
	...String
]
```

	*OUTPUT
```
[
	id(String): [count(Number),itemPrice(default)]
	...
]
```

2.generateItemList
*INPUT
```
[
	id(String): [count(Number)]
	...String
]
```

	*OUTPUT
```
	{
		id：（string）
		price : (int)
		count : (int)
		name : (string)
		sinItemTotal : default
	}
	...
```
3.calcuOriginPrice

*INPUT
```
	{
		id：（string）
		price : (int)
		count : (int)
		name : (string)
		sinItemTotal : default
	}
	...
```

*OUTPUT
```
		{
		id：（string）
		price : (int)
		count : (int)
		name : (string)
		sinItemTotal : price * count
		}
		...
```

4.calcuPromotions1
*INPUT
```
	[
		item1(obj)
		item2(obj)
		...
			]
	
```

*OUTPUT
```
	{

	saveList: [
	id：（string）
		price : (int)
		count : (int)
		name : (string)
		sinItemTotal : price * count
			
	}
	...
```

5.calcuPromotions2
*INPUT
```
	[
		item1(obj)
		item2(obj)
		...
			]
	
```

*OUTPUT
```
	{

	saveList: [
	id：（string）
		price : (int)
		count : (int)
		name : (string)
		sinItemTotal : price * count
			
	}
	...
```
6.comparePromotions




