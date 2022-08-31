import React, {Component} from "react";
import { newItemData } from "../data/HomeData";
import { PopItemData } from "../data/HomeData";
import { ItemPageData } from "../data/ItemData";

const ItemContext = React.createContext();
//Provider goes first
//Consumer

class ItemProvider extends Component {
    state = {
        newitems: newItemData, 
        popitems: PopItemData,
        items: ItemPageData
    }
    render() {
        return(
           <ItemContext.Provider value={{
            ...this.state,
           }}>
            {this.props.children}
           </ItemContext.Provider>
        )
    }
}

const ItemConsumer = ItemContext.Consumer;

export {ItemProvider, ItemConsumer};