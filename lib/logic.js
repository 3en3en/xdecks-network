/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.xdecks.ChangeAssetValue} ChangeAssetValue
 * @transaction
 */
async function ChangeAssetValue(tx) {
    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.xdecks.XdecksAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);
}

/**
  * Validate the asset
  * @param {org.xdecks.Validate} Validate - the Validate to be processed
  * @transaction
  */
 function Validate(vote) {
var member = vote.member;
// get asset
var xdecksAsset = vote.xdecksAsset;
//  give a vote to the asset
xdecksAsset.votes += 1;

        // get asset 'org.xdecks.XdecksAsset'
return getAssetRegistry('org.xdecks.XdecksAsset').then(function(XdecksAssetRegistry) {
    
    // update the asset registry
    return XdecksAssetRegistry.update(xdecksAsset);
});
 }

/**
 * Change the validation status
 * @param {org.xdecks.ChangeValidationStatus} ChangeValidationStatus - the ChangeValidationStatus transaction
 * @transaction
 */

async function ChangeValidationStatus(tx) {
    // Save the old state of the asset.
    const oldState = tx.asset.state;

    // Update the asset with the new state.
    tx.asset.state = tx.newState;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.xdecks.XdecksAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);
}