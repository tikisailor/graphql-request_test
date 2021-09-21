import { request, gql } from 'graphql-request'
import {expect,should,assert} from 'chai';

const query = gql`
{
    validatorThresholds {
        nodes {
            id
            startBlock
            timestamp
            validatorWithLeastBond
           validatorList
        }
    }
}
`

// request('https://api.subquery.network/sq/tikisailor/polkawatch__dGlra', query).then((data) => {
//   // console.log(data)
//   // console.log(data.validatorThresholds.nodes[1].startBlock);
//   const ob = data.validatorThresholds.nodes.find(obj => obj.startBlock === 4456306);
//   console.log(Object.keys(ob).length);
//   console.log(ob.validatorList.length);
//   console.log(data.validatorThresholds.nodes.find(obj => obj.startBlock === 4456306));
//   // console.log(data.validatorThresholds.nodes[0].validatorList);
// });


describe("API is responding",function(){
    it("Check if query returns expected result",function(){
      request('https://api.subquery.network/sq/tikisailor/polkawatch__dGlra', query).then((data) => {
        const ob = data.validatorThresholds.nodes.find(obj => obj.startBlock === 4456306);
        console.log(ob.validatorList.length);
        assert(ob.validatorList.length===297);
      });
    })
});
