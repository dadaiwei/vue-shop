<template>
	<div class="person-management">
		<button type="button" class="btn btn-default btn-info btn-sm add-person" @click="addNewPerson">
			<i class="iconfont icon-adduser"></i>添加新员工
		</button>
		<div class="person-table">
			<table class="table table-hover table-bordered table-striped">
				<thead>
					<tr>
						<th v-for="(h,index) in headers" :key="'header' + index">{{h.title}}</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(person, index) in personList" :key="'person' + index">
						<td v-for="h in headers">
							{{person[h.field]}}
						</td>
						<td>
							<button type="button" 
								class="btn btn-sm btn-default btn-warning delete-person"
								@click="deletePerson(index)">
								<i class="iconfont icon-shanchu"></i>删除
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<v-warning :message="message" @closeWarningModal="closeWarning" v-show="showWarning"></v-warning>
		<add-person v-show="addPerson" @closeModal="closeModal"></add-person>
	</div>
</template>

<script>
	import AddPerson from './addNewPerson'
	import VWarning from './modal/VWarning'
	import {mapMutations} from 'vuex'
	
	export default{
		name: "PersonManagement",
		data(){
			return {
				headers: [
					{title: "姓名", field: "name"},
					{title: "职位", field: "position"},
					{title: "工号", field: "coding"},
					{title: "权限", field: "jurisdiction"},
					{title: "联系电话", field: "telephone"},
					{title: "家庭住址", field: "address"}
				],
				addPerson: false,
				showWarning: false,
				message: "管理员不能删除"
			}
		},
		computed: {
			personList(){
				return this.$store.state.person.persons.personList;
			}
		},
		methods: {
			...mapMutations(['addNewPerson', 'deletePerson', 'setDialogVisble', 'setDialogInvisible']),
			deletePerson(index){
				if(index === 0){
					this.showWarning = true;
				}else{
					this.$store.commit("deletePerson", index);
				}
			},
			closeWarning(){
				this.showWarning = false;
			},
			addNewPerson(){
				this.addPerson = true;
			},
			closeModal(closeFlag){
				this.addPerson = closeFlag;
			}
		},
		components: {
			AddPerson,
			VWarning
		}
	}
</script>

<style scoped>
	.person-management{
		padding: 20px 30px;
		display: block;
	}
	.add-person{
		display: block;
	}
	.person-table{
		margin-top: 20px;
		border: 1px solid #EEEEEE;
	}
	.person-table thead{
		background-color: #E0E0E0;
	}
	.person-table tr th, .person-table tr td{
		text-align: center;
	}
	.delete-person{
		padding: 0px 5px;
	}
</style>