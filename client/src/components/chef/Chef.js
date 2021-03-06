import React, { Component } from 'react'
import { Button, Col, Collection, CollectionItem, Row } from '../../../../node_modules/react-materialize';
import './chef.css'
import { getPreorderbytable, getProductCashier, updateFinished, get_table1, get_table2, get_table3, get_table4, get_table5, get_table6 } from '../../accions/preorderAccions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../waiter/waiter.css'

import Barnav from '../header/navbar'
import Badge from '../../../../node_modules/react-materialize/lib/Badge';
let cont2 = 0; let cont1 = 0; let cont3 = 0; let cont4 = 0; let cont5 = 0; let cont6 = 0; let lastTable="";


class Chef extends Component {

    componentDidMount() {
		this.props.getPreorderbytable()
		this.updateCosults()
        this.interval1 = setInterval(() => this.updateCosults(), 30000);
        this.props.getProductCashier()
      }
      
      componentWillUnmount() {
        clearInterval(this.interval1);
      }
      
      updateCosults(){
          this.props.get_table1()
          this.props.get_table2()
          this.props.get_table3()
          this.props.get_table4()
          this.props.get_table5()
          this.props.get_table6()
          
      }
    

    updateFinished (preorder){
        preorder.map((item) => (
            this.props.updateFinished(item._id, item.idtable, item.name, item.ingredients, item.price, item.sended, item.start, item.finished, item.delivered, item.noOrder)
        ))
	}


    changecolor1(table1) {
		cont1 = 0;
		table1.map(() => {
			cont1++;
		});
		if (cont1 === 0) {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<Button onClick={() => this.sendTable('1')} className="ch-btn cyan darken-2">
						<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 1
						</Row>
					</Button>
				</Col>
			);
		} else {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<Button onClick={() => this.sendTable('1')} className="ch-btn green">
					<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						Table 1
					</Button>
					<span className="chef-badge red white-text">{cont1}</span>
				</Col>
			);
		}
	}

	changecolor2(table2) {
		cont2 = 0;
		table2.map(() => {
			cont2 = cont2 + 1;
		});

		if (cont2 === 0) {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<Button onClick={() => this.sendTable('2')} className="ch-btn cyan darken-2">
					<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 2
						</Row>
					</Button>
				</Col>
			);
		} else {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
				<span className="chef-badge red white-text">{cont2}</span>
					<Button onClick={() => this.sendTable('2')} className="ch-btn green">
					<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 2
						</Row>
					</Button>
				</Col>
			);
		}
	}

	changecolor3(table3) {
		cont3 = 0;
		table3.map(() => {
			cont3 = cont3 + 1;
		});

		if (cont3 === 0) {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<Button onClick={() => this.sendTable('3')} className="ch-btn cyan darken-2">
					<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 3
						</Row>
					</Button>
				</Col>
			);
		} else {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
						<span className="chef-badge red white-text">{cont3}</span>
					<Button onClick={() => this.sendTable('3')} className="ch-btn green">
						<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 3
						</Row>
					</Button>
					<Badge className="chef-badge red white-text">{cont3}</Badge>
				</Col>
			);
		}
	}

	changecolor4(table4) {
		cont4 = 0;
		table4.map(() => {
			cont4 = cont4 + 1;
		});

		if (cont4 === 0) {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<Button onClick={() => this.sendTable('4')} className="ch-btn cyan darken-2">
						<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">Table 4</Row>
					</Button>{' '}
				</Col>
			);
		} else {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<span className="chef-badge red white-text">{cont4}</span>
					<Button onClick={() => this.sendTable('4')} className="ch-btn green">
						<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 4
						</Row>
					</Button>
					<Badge className="chef-badge red white-text">{cont4}</Badge>
				</Col>
			);
		}
	}

	changecolor5(table5) {
		cont5 = 0;
		table5.map(() => {
			cont5 = cont5 + 1;
		});

		if (cont5 === 0) {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<Button onClick={() => this.sendTable('5')} className="ch-btn cyan darken-2">
					<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 5
						</Row>
					</Button>
				</Col>
			);
		} else {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
						<span className="chef-badge red white-text">{cont5}</span>
					<Button onClick={() => this.sendTable('5')} className="ch-btn green">
						<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 5
						</Row>
					</Button>
				</Col>
			);
		}
	}

	changecolor6(table6) {
		cont6 = 0;
		table6.map(() => {
			cont6 = cont6 + 1;
		});

		if (cont6 === 0) {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<Button onClick={() => this.sendTable('6')} className="ch-btn cyan darken-2">
					<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 6
						</Row>
					</Button>
				</Col>
			);
		} else {
			return (
				<Col s={2} m={2} l={2} xl={2} className="center">
					<span className="chef-badge red white-text">{cont6}</span>
					<Button onClick={() => this.sendTable('6')} className="ch-btn green">
					<Row className="no-marg-b">
							<img className="btn-img" src="assets/table.svg" alt="" />
						</Row>
						<Row className="no-marg-b">
							Table 6
						</Row>
					</Button>
				</Col>
			);
		}
	}

    sendTable(table){
        lastTable=table
        this.seeOrder(lastTable)
        this.seeOrderWaiter(lastTable)
    }

    seeOrder = (table) => {
        this.props.getPreorderbytable(table);
		switch(table){
			case '1':{
				this.props.get_table1()
			}break;
			case '2': {
				this.props.get_table2()
			} break;
			case '3': {
				this.props.get_table3()
			} break;
			case '4': {
				this.props.get_table4()
			} break;
			case '5': {
				this.props.get_table5()
			} break;
			case '6': {
				this.props.get_table6()
			} break;
		}
    }

    seeOrderWaiter = (table) => {
		this.props.getProductCashier(table);
    }

    render() {
        const { preorder } = this.props.preorder
        const { preorderCashier } = this.props.preorderCashier
        const { table1 } = this.props.table1
        const { table2 } = this.props.table2
        const { table3 } = this.props.table3
        const { table4 } = this.props.table4
        const { table5 } = this.props.table5
        const { table6 } = this.props.table6

		const  role  = this.props.auth.user.role
    	if(role==='Chef' || role==='all'){
		
			return (
				<div>
					<Barnav Title="Chef" history={this.props.history}/>
					<div className='m-top20' />
					<Row>
						{
							this.changecolor1(table1)
						}
	
						{
							this.changecolor2(table2)
						}
	
						{
							this.changecolor3(table3)
						}
	
						{
							this.changecolor4(table4)
						}
	
						{
							this.changecolor5(table5)
						}
	
						{
							this.changecolor6(table6)
						}
	
					</Row>
					<div className='m-top20'/>
					<Row>
						<Col className='offset-m1' s={12} m={5}>
							<Collection header="Entries">
							<div className='scrollExits'>
								{
									preorder.map(eachPreorder => {
										return (
											<Col m={12} l={6}>
												<Collection>
													<CollectionItem className='no-padding center-align orange white-text'><Button onClick={() => { updateFinished(eachPreorder), setTimeout(()=>this.seeOrder(lastTable),100) }} waves='light' flat className='transparent white-text'> {eachPreorder.name}</Button></CollectionItem>
													{
														eachPreorder.ingredients.map(eachIngredients => {
															return (
																<CollectionItem className='black-text'>{eachIngredients}</CollectionItem>
															)
														})
													}
	
												</Collection>
											</Col>
										)
	
									})
								}
								</div>
							</Collection>
						</Col>
						<Col s={12} m={5}>
							<Collection header="Exits">
							<div className='scrollExits'>
								{
									preorderCashier.map(eachPreorder => {
										return (
											<CollectionItem>
											<Row className="no-marg-b">
												<Col s={12} m={12} l={12} xl={12}>{eachPreorder.name}</Col>
												<Col s={12} m={12} l={12} xl={12}>
													{
														eachPreorder.ingredients.map(eachIngredients => {
															return (
																<Col s={4} m={4} l={4} xl={4}>
																<p className='black-text'>{eachIngredients}</p>
																</Col>
															)
														})
													}
												</Col>
											</Row>
											</CollectionItem>
										)
										
									})
								}
								</div>
							</Collection>
						</Col>
					</Row>
	
				</div>
			)
		}else{
			return(
				<div className='bg-img  valign-wrapper'>
				<div className="cntr center-align z-depth-2">
				  <h1 className="white-text">Go back</h1>
				  <h5 className="white-text">you shouldn't be here</h5>
				  <Button onClick={() => this.props.history.push('/')}>go back</Button>
				</div>
			  </div>
			)
		  }
    }
}
Chef.propTypes = {
    getPreorder: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired,
    updateFinished: PropTypes.func.isRequired,
    getPreorderbytable: PropTypes.func.isRequired,
    preorderCashier: PropTypes.object.isRequired,
    get_table1: PropTypes.func.isRequired,
    get_table2: PropTypes.func.isRequired,
    get_table3: PropTypes.func.isRequired,
    get_table4: PropTypes.func.isRequired,
    get_table5: PropTypes.func.isRequired,
    get_table6: PropTypes.func.isRequired,


    table1: PropTypes.object.isRequired,
    table2: PropTypes.object.isRequired,
    table3: PropTypes.object.isRequired,
    table4: PropTypes.object.isRequired,
    table5: PropTypes.object.isRequired,
    table6: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired



};

const mapStateToProps = state => ({
    preorder: state.preorder,
    preorderCashier: state.preorder,
    table1: state.preorder,
    table2: state.preorder,
    table3: state.preorder,
    table4: state.preorder,
    table5: state.preorder,
	table6: state.preorder,
	auth: state.auth

});

export default connect(mapStateToProps, { getPreorderbytable, getProductCashier, updateFinished, get_table1, get_table2, get_table3, get_table4, get_table5, get_table6 })(Chef);