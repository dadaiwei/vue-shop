import Vue from 'vue'

export default{
	state: {
		persons: {
			name:"persons",
			personList: [
				{
					name: "Admin",
					coding: "000",
					position: "管理员",
					jurisdiction: "一级",
					telephone: "13890296790",
					address: "安徽省桐城市大关镇"
				}
			]
		}
	},
	mutations: {
		addNewPerson(state, person){
			state.persons.personList.push(person);
		},
		deletePerson(state, index){
			if(state.persons.personList[index].coding !== "000"){
				 state.persons.personList.splice(index, 1);
			}
		}
	},
	actions: {
		addNewPerson({commit},person){
			commit("addNewPerson", person);
		},
		deletePerson({commit}, index){
			commit("deletePerson", index);
		}
	}
}
