import { Vue, Component, Watch, Prop, Emit } from 'vue-property-decorator';
import { Cell } from 'vant';
import { Barrages, Barrage } from '../interfaces';
import common from '../common';


@Component({
    components: {
        [Cell.name]: Cell,
    }
})
export default class BarrageList extends Vue {
    @Prop()
    public barrageData!: Barrages;
    public render() {
        return (
            <div id="BarrageList">
                {
                    this.barrageData.data.map((value: Barrage) => {
                        return (
                            <van-cell 
                            title={ value.id } 
                            value={ value.barrage } 
                            label={ this.convTime(String(value.timestamp)) } 
                            />
                        )
                    })
                }
            </div>
        );
    }
    private convTime(ts: string): string {
        return common.Time.getLocalTime(ts);
    }

}