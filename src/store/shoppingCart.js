export default{
	state: {
		shoppingCart: {
	        name: 'shoppingCart',
	        number: 0,
	        shoppingCartList: [
	        	{
					coding: '123', 
	                name: '苹果', 
	                price: '12', 
	                number: '1', 
	                selectNumber: "1",
	                category: '生鲜水果', 
	                select: false,
	                date: '2018-01-06'
				},
				{
					coding: '124', 
	                name: '栗子', 
	                price: '20', 
	                number: '3', 
	                selectNumber: '3',
	                category: '休闲零食', 
	                 select: false,
	                date: '2017-06-06'
				},
				{
					coding: '120', 
	                name: '啤酒', 
	                price: '200', 
	                number: '5', 
	                selectNumber: '5',
	                category: '酒水饮料', 
	                 select: false,
	                date: '2017-09-06'
				},
				{
					coding: '125', 
	                name: '大米', 
	                price: '10', 
	                number: '10', 
	                selectNumber: '10',
	                category: '粮油副食', 
	                 select: false,
	                date: '2017-12-06'
				},
				{
					coding: '200', 
	                name: '沐浴露', 
	                price: '40', 
	                number: '5', 
	                selectNumber: '5',
	                category: '日常洗护', 
	                 select: false,
	                date: '2018-03-06'
				},
				{
					coding: '390', 
	                name: '洗洁精', 
	                price: '40', 
	                number: '5', 
	                selectNumber: '5',
	                category: '厨卫用品', 
	                 select: false,
	                date: '2018-02-06'
				},
				{
					coding: '401', 
	                name: '外套', 
	                price: '200', 
	                number: '2', 
	                selectNumber: '2',
	                category: '其他品类', 
	                 select: false,
	                date: '2018-02-16'
				}
	        ]
    	}
	},
	mutations: {
		addShoppingCart(state, goods){
			state.shoppingCart.shoppingCartList.push(goods);
			state.shoppingCart.number += 1;
		},
		deleteShoppingCart(state, index){
			state.shoppingCart.shoppingCartList.splice(index, 1);
			state.shoppingCart.number -= 1;
		}
	},
	actions: {
		addShoppingCart({commit}, goods){
			commit("addShoppingCart", goods);
		},
		deleteShoppingCart({commit}, index){
			commit("deleteShoppingCart", index);
		}
	}
}
