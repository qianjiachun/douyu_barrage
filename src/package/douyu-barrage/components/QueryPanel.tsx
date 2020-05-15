import { Vue, Component, Emit } from 'vue-property-decorator';
import { Field, Button } from 'vant';
import common from '../common';

@Component({
    components: {
        [Field.name]: Field,
        [Button.name]: Button,
    }
})
export default class QueryPanel extends Vue {
    private rid: string = "5189167";
    private id: string = "";
    private minTime: string = "";
    private maxTime: string = "";
    
    public render() {
        return (
            <div id='QueryPanel'>
                <van-field v-model={ this.rid } type="digit" label="房间号" />
                <van-field v-model={ this.id } label="昵称" />
                <van-field v-model={ this.minTime } label="时间下限" />
                <van-field v-model={ this.maxTime } label="时间上限" />
                <van-button type="primary" size="large" onClick={ this.emit }>确定</van-button>
            </div>
        );
    }
    private emit() {
        this.setInfo(this.rid, this.id, this.minTime, this.maxTime, 1);
    }
    @Emit('setInfo')
    private setInfo(rid: string, id: string, maxTime:string, minTime: string, page: number){
        return;
    }

    private created() {
        this.minTime = common.Time.getNextDate(-1) + " 00:00:00";
        this.maxTime = common.Time.getNextDate(0) + " 00:00:00";
    }

}