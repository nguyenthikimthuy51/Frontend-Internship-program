import ExpenseEntryItem from './Component/Ex_topic7/ExpenseEntryItem';
import './App.css';
import Event from './Component/Ex_topic8/StatefulComponentClock';
import StatefulComponentClock from './Component/Ex_topic8/StatefulComponentClock';
import Lifecycle from './Component/Ex_topic8/Lifecycle';
import ExpenseEntryItemList from './Component/Ex_topic8/ExpenseEntryItemList';
import ExpenseEntryItemListFn from './Component/Ex_topic8/UseState';
import ExampleLifecycle from './Component/Ex_topic8/ExampleLifecycle';
import LifecycleComponent from './Component/Ex_topic8/LifecycleComponenent';
import { UseEffectPractice } from './Component/Ex_topic9/UseEffectPractice';
import RichTextMessage from './Component/Ex_topic8/ChildrenProps';
import Layout from './Component/Ex_topic8/LayoutComponent';
import UseStatePractice from './Component/Ex_topic9/UseStatePractice';
import UseRefPractice from './Component/Ex_topic9/UseRefPractice';
import MemoPractice from './Component/Ex_topic9/MemoPractice';
import UseMemoPractice from './Component/Ex_topic9/UseMemoPractice';
import UseCallbackPractice from './Component/Ex_topic9/UseCallbackPractice';
import BigCircle from './Component/Ex_topic9/CustomHook/BigCircle';
function App() {
  const items = [
    {
      id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food"
    },
    {
      id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category:
        "Food"
    },
    {
      id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category:
        "Entertainment"
    },
    {
      id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15",
      category: "Academic"
    },
    {
      id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category:
        "Food"
    },
    {
      id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category:
        "Cloth"
    },
    {
      id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category:
        "Entertainment"
    },
    {
      id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category:
        "Food"
    },
    {
      id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category:
        "Gadgets"
    },
    {
      id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category:
        "Academic"
    }
  ]
  return (
    <div className="App">
      {/* <ExpenseEntryItem
        items={items}
      />
      <div className='mt-10'>
        <StatefulComponentClock/>
      </div> */}
      {/* <Lifecycle/> */}
      {/* <ExpenseEntryItemList items={items}/> */}
      {/* <ExpenseEntryItemListFn items={items}/> */}
      {/* <ExampleLifecycle/> */}
      {/* <LifecycleComponent/> */}
      {/* <UseEffectPractice/> */}
      {/* <RichTextMessage>
        <p className='text-green-700 text-4xl'>Hello Thùy</p>
      </RichTextMessage> */}
      {/* <Layout
        header={<h1>This is header</h1>}
        content={<p>This is content</p>}
        footer={<span>This is footer</span>}
      /> */}
      {/* <UseStatePractice /> */}
      {/* <UseRefPractice /> */}
      
      {/* <MemoPractice/> */}
      {/* <UseMemoPractice/> */}
      {/* <UseCallbackPractice/> */}
      <BigCircle/>
    </div>
  );
}

export default App;
