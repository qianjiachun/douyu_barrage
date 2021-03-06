import { Vue, Component } from 'vue-property-decorator';
import apis from '../apis';
import { Barrages, LineData } from '../interfaces';
import { NavBar, Popup, Pagination } from 'vant';
import components from '../components';
import common from '../common';

@Component({
    components: {
        [NavBar.name]: NavBar,
        [Popup.name]: Popup,
        [Pagination.name]: Pagination,
        ['QueryPanel']: components.QueryPanel,
        ['BarrageList']: components.BarrageList,
        ['BarrageNumLine']: components.BarrageNumLine,
    }
})
export default class DouyuBarrage extends Vue {

    private isPopupShow: boolean = false;
    private isShowPage: boolean = false;

    private rid: string = "";
    private id: string = "";
    private minTime: string = "";
    private maxTime: string = "";
    private page: number = 1;

    private barrageData: Barrages = {data:[]};

    private isShowLine: boolean = false;
    private lineData: LineData = {x:["1"],y:[1]}; 
    
    public render() {
        return (
            <div>
                <van-nav-bar title="弹幕采集系统前端" right-text="查询" on-click-right={ this.showPopup }></van-nav-bar>
                <van-popup v-model={ this.isPopupShow } position="bottom">
                    <query-panel on-setInfo={ this.setInfo }></query-panel>
                </van-popup>
                {
                    this.isShowLine ? <barrage-num-line lineData={ this.lineData }></barrage-num-line> : false
                }
                <barrage-list barrageData={ this.barrageData }></barrage-list>
                {
                    this.isShowPage ? <van-pagination v-model={ this.page } total-items="9999" items-per-page="5" on-change={ this.changePage } /> : false
                }
                
            </div>
        );
    }
    private async changePage() {
        
        this.barrageData = await apis.GetBarrage.queryBarrage_id(this.rid, this.id, common.Time.timeString2Timestamp(this.minTime), common.Time.timeString2Timestamp(this.maxTime), String(this.page - 1));
    }
    
    private showPopup() {
        this.isPopupShow = !this.isPopupShow;
        
    }
    private async setInfo(a: string, b: string, c: string, d: string, e: number) {
        this.rid =  a;
        this.id = b;
        this.minTime = c;
        this.maxTime = d;
        this.isPopupShow = false;
        this.page = e;
        
        this.isShowPage = true;
        this.barrageData = await apis.GetBarrage.queryBarrage_id(this.rid, this.id, common.Time.timeString2Timestamp(this.minTime), common.Time.timeString2Timestamp(this.maxTime), String(this.page - 1));

        this.isShowLine = true;
        this.lineData = await apis.GetBarrage.queryBarrageNum_time(this.rid, common.Time.timeString2Timestamp(this.minTime), common.Time.timeString2Timestamp(this.maxTime));
    }

}