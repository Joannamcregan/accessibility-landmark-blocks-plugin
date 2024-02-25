import {PanelBody, PanelRow, ColorPicker, DimensionControl} from "@wordpress/components"
import {InspectorControls, InnerBlocks} from "@wordpress/block-editor"
import { useState } from 'react'

wp.blocks.registerBlockType("jjcmc/main-container", {
    title: "Main Container for Accessibility",
    icon: "html",
    category: "common",
    edit: function(props){
        return(
            <>
            <p style={{textAlign: "center"}}>----------main content start----------</p>
            <main>
                <InnerBlocks />
            </main>
            <p style={{textAlign: "center"}}>----------main content end----------</p>
            </>
        )
    },
    save: function(props) {
        return(
            <main>
                <InnerBlocks.Content />
            </main>
        )
    }
})

wp.blocks.registerBlockType("jjcmc/header-container", {
    title: "Header Container for Accessibility",
    icon: "html",
    category: "common",
    attributes: {
        backgroundColor: {type: "string", default: "#0e004b"}
    },
    supports: {
        spacing: {
            margin: true,  // Enable margin UI control.
            padding: true, // Enable padding UI control.
            blockGap: true,  // Enables block spacing UI control for blocks that also use `layout`.
        }
    },
    edit: function(props){
        return(
            <>
            <InspectorControls>
                <PanelBody title="Header Background Color:" initialOpen={true}>
                    <PanelRow>
                        <ColorPicker color={props.attributes.backgroundColor} onChangeComplete={x => props.setAttributes({backgroundColor: x.hex})} disableAlpha={true} />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <header style={{color: '#fafafa', 
            backgroundColor: `${props.attributes.backgroundColor}`}}>
                <InnerBlocks />
            </header>
            </>
        )
    },
    save: function(props) {
        return(
            <header style={{backgroundColor: `${props.attributes.backgroundColor}`,
            color: '#fafafa'}}>
                <InnerBlocks.Content />
            </header>
        )
    }
})

wp.blocks.registerBlockType("jjcmc/footer-container", {
    title: "Footer Container for Accessibility",
    icon: "html",
    category: "common",
    attributes: {
        backgroundColor: {type: "string", default: "#0e004b"}
    },
    supports: {
        spacing: {
            margin: true,  // Enable margin UI control.
            padding: true, // Enable padding UI control.
            blockGap: true,  // Enables block spacing UI control for blocks that also use `layout`.
        }
    },
    edit: function(props){
        return(
            <>
            <InspectorControls>
                <PanelBody title="Footer Background Color:" initialOpen={true}>
                    <PanelRow>
                        <ColorPicker color={props.attributes.backgroundColor} onChangeComplete={x => props.setAttributes({backgroundColor: x.hex})} disableAlpha={true} />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <footer style={{color: '#fafafa', 
            backgroundColor: `${props.attributes.backgroundColor}`}}>
                <InnerBlocks />
            </footer>
            </>
        )
    },
    save: function(props) {
        return(
            <footer style={{backgroundColor: `${props.attributes.backgroundColor}`,
            color: '#fafafa'}}>
                <InnerBlocks.Content />
            </footer>
        )
    }
})