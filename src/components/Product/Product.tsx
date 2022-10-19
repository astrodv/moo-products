import React, {useEffect, useState} from 'react';
import {
    Col,
    Container,
    Fieldset, HR,
    Image,
    InputField,
    List,
    ListParent,
    Row,
    TextH1,
    TextH4,
    TextP
} from '../Core'
import ProductShot from './ProductShot.jpeg';
import data from "../../data/productOptionsData.json";


const Product = () => {

    // Import all the products from the hardcoded JSON file
    const productData = data.products

    // Handler for the product selection radio inputs
    const handleChange = (evt: { target: { value: any; name: any; }; }) => {
        const value = evt.target.value;
        setOption({
            ...option,
            [evt.target.name]: value
        });
    }

    // Function that searches and returns a unique product based on the given attributes (colour and paper type)
    const productFinder = (coverColour: string, paperType: string) => {
        // Filtering all products based on the given attributes
        return productData.filter(o => o.attributes.some((a => a.label === coverColour && a.type)))
            .filter(o => o.attributes.some((a => a.label === paperType && a.type )));
    }

    // Function that searches and returns all product attributes based on the given query (color or paper type)
    const attributesMapper = (type : string) => {
        let arr :any = [];
        productData.forEach(function(product) : any {
            let mapper = product.attributes.filter(attr => attr.type === type).map(attr => attr.label)
            // Storing the filtered results into a temporary array
            arr.push(mapper);
        });

        // Merging the above items into one big array
        let mergedAttributes = [].concat.apply([], arr);

        // Removing duplicates from the previous array
        return mergedAttributes.filter((element, index) => {
            return mergedAttributes.indexOf(element) === index;
        });
    }

    // Setting up the initial state for the product selection attributes
    const [option, setOption] = React.useState({
        color: attributesMapper('cover-colour')[0],
        paper: attributesMapper('paper-type')[0]
    })

    // Rendered Product Summary with some initial options
    const [summary, setSummary] = React.useState(productFinder(option.color,option.paper))

    // Update Product Summary every time the option.state from the product selection attributes changes
    useEffect(() => {
        setSummary(productFinder(option.color,option.paper))
    }, [option]);


    // Function that makes the product attributes ready to presented to the visitors
    const beautifyTypes = (attr: string) => {
        if (attr === 'cover-colour') {
            return 'Colour';
        }
        if (attr === 'paper-type') {
            return 'Layout';
        }
        if (attr === 'page-count') {
            return 'Pages';
        }
        return null;
    }

    return (
        <Container>
            <Row>
                <Col size={1} marginTop={5}>
                    <Image src={ProductShot} alt='Image of the product'/>
                </Col>
                <Col size={2}>
                    <TextH1 size={1.8}>{summary[0]['product-label']}</TextH1>
                    <TextP>Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text</TextP>
                    <Fieldset>
                        <TextH4 size={1.2}>Choose your colour</TextH4>
                        { attributesMapper('cover-colour').map((item)=>{
                            return (
                                <InputField key={item}
                                            type='radio'
                                            name='color'
                                            value={item}
                                            onChange={handleChange}
                                            checked={option.color === item}
                                />
                            )
                        })}
                    </Fieldset>
                    <Fieldset>
                        <TextH4 size={1.2}>Choose your page layout</TextH4>
                        { attributesMapper('paper-type').map((item)=>{
                            return (
                                <InputField key={item}
                                            type='radio'
                                            name='paper'
                                            value={item}
                                            onChange={handleChange}
                                            checked={option.paper === item}
                                />
                            )
                        })}
                    </Fieldset>
                    <TextH4 size={1.2} spacingBottom={1.2}>Summary</TextH4>
                    <HR color='lightgrey' spacingBottom={0.4}/>
                    <ListParent>
                        { summary[0].attributes.map((item)=>{
                            return (
                                <React.Fragment>
                                    <List key={item.id}>{beautifyTypes(item.type)}: {item.label}</List>
                                    <HR color='lightgrey' spacingBottom={1}/>
                                </React.Fragment>
                            )
                        })}
                        <List key={summary[0]['price']}>Price: {summary[0]['price']}</List>
                    </ListParent>
                </Col>
            </Row>
        </Container>
    )
}

export default Product;
