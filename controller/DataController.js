import DataService from "../model/DataService.js";
import DataView from "../view/DataView.js";
import HibaView from "../view/HibaView.js";
import Megjelenit from "../view/megjelenit/Megjelenit.js";
import UrlapView from "../view/urlap/UrlapView.js";
import UrlapModel from "../model/UrlapModel.js";

class DataController {
  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();
    console.log(this.urlapModel.getLeiro())
    this.dataService.getData("../adat.json", this.megjelenit, this.hibamegjelenit,this.urlapModel.getLeiro());
   
  }

  megjelenit(lista,leiro) {
    console.log("controllerben", lista);
    new DataView(lista, $(".lista"));
    new UrlapView($(".ujadat"), leiro);
    new Megjelenit(lista, $(".lista"),leiro);
  }

  hibamegjelenit(error){
    console.log(error)
    new HibaView(error, $(".lista"))

  }
}
export default DataController;
