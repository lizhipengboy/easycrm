import React, { PureComponent } from 'react';
// import { connect } from 'dva';
import { Table } from 'antd';
import style from './index.less'
import SearchContext from './components/SearchContext'
import Operate from './components/Operate'

class Progress extends PureComponent {
    render() {
        const dataSource = [
            {
                key: '3',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '4',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const operate = (text, record) => (
           <Operate {...record} />
        )

        return (
            <div className={style.container} >
               <div className={style.filterContainer}>
                <SearchContext {...this.props} />
                </div>
                <div className={style.tableContainer}>
                    <div className={style.tableItem}>
                        <Table
                            dataSource={dataSource}
                            size="middle"
                            bordered
                            fixedHeader
                        >
                            <Table.Column title="客户名称" align="center" dataIndex="name" width={100} />
                            <Table.Column title="客户需求" align="center" dataIndex="demands" width={100} />
                            <Table.Column title="谈单/开发进度" align="center" dataIndex="process" width={100} />
                            <Table.Column title="操作" align="center" render={operate} width={100} />
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progress;
