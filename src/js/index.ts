import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface ISensorData{
    id: number
    sensorName: string
    temperature: number
    co2: number
}

let baseUrl: string = "https://rb-sensordata-rest.azurewebsites.net/api/sensor/"

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        sensordata: [],
        idToGetBy: -1
    },
    methods: {
        helperGetAndShow(url: string) { // helper method to get all
            axios.get<ISensorData[]>(url)
            .then((response: AxiosResponse<ISensorData[]>) => {
                this.sensordata = response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        getAllData(){
            this.helperGetAndShow(baseUrl)
        },
        clearAllData(){
            while(this.sensordata.length > 0){
                this.sensordata.pop()
            }
        }
    }
})