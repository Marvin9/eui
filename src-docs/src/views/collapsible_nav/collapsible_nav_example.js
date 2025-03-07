import React from 'react';
import { Link } from 'react-router';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';

import {
  EuiCode,
  EuiCollapsibleNav,
  EuiText,
  EuiSpacer,
  EuiCallOut,
  EuiCollapsibleNavGroup,
} from '../../../../src/components';

import CollapsibleNav from './collapsible_nav';
const collapsibleNavSource = require('!!raw-loader!./collapsible_nav');
const collapsibleNavHtml = renderToHtml(CollapsibleNav);

import CollapsibleNavGroup from './collapsible_nav_group';
const collapsibleNavGroupSource = require('!!raw-loader!./collapsible_nav_group');
const collapsibleNavGroupHtml = renderToHtml(CollapsibleNavGroup);

import CollapsibleNavList from './collapsible_nav_list';
const collapsibleNavListSource = require('!!raw-loader!./collapsible_nav_list');
const collapsibleNavListHtml = renderToHtml(CollapsibleNavList);

import CollapsibleNavAll from './collapsible_nav_all';
const collapsibleNavAllSource = require('!!raw-loader!./collapsible_nav_all');
const collapsibleNavAllHtml = renderToHtml(CollapsibleNavAll);

export const CollapsibleNavExample = {
  title: 'Collapsible nav',
  intro: (
    <EuiText>
      <p>
        This is a high level component that creates a flyout-style navigational
        pane. It is the next evolution of{' '}
        <Link to="/layout/nav-drawer">
          <strong>EuiNavDrawer</strong>
        </Link>{' '}
        which will be deprecated soon.
      </p>
      <EuiSpacer size="m" />
    </EuiText>
  ),
  sections: [
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: collapsibleNavSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: collapsibleNavHtml,
        },
      ],
      text: (
        <>
          <p>
            <strong>EuiCollapsibleNav</strong> is a similar implementation to{' '}
            <Link to="/layout/flyout">
              <strong>EuiFlyout</strong>
            </Link>
            ; the visibility of which must be maintained by the consuming
            application. An extra feature that it provides is the ability to{' '}
            <EuiCode>dock</EuiCode> the flyout. This affixes the flyout to the
            window and pushes the body content by adding left side padding.
          </p>
          <EuiCallOut
            iconType="tableOfContents"
            title="Docking is not possible on small screens because it would force less real estate for the page content."
          />
        </>
      ),
      props: { EuiCollapsibleNav },
      demo: <CollapsibleNav />,
      snippet: `<EuiCollapsibleNav
  button={<EuiButton onClick={() => setNavIsOpen(!navIsOpen)}>Toggle nav</EuiButton>}
  isOpen={navIsOpen}
  isDocked={navIsDocked}
  onClose={() => setNavIsOpen(false)}
/>`,
    },
    {
      title: 'Collapsible nav group',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: collapsibleNavGroupSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: collapsibleNavGroupHtml,
        },
      ],
      text: (
        <>
          <p>
            An <strong>EuiCollapsibleNavGroup</strong> adds some basic borders
            and <EuiCode>background</EuiCode> color of <EuiCode>none</EuiCode>,{' '}
            <EuiCode>light</EuiCode>, or <EuiCode>dark</EuiCode>. Give each
            section a heading by providing an optional <EuiCode>title</EuiCode>{' '}
            and <EuiCode>iconType</EuiCode>. Make the section collapsible (
            <Link to="/layout/accordion">accordion style</Link>) with{' '}
            <EuiCode language="js">isCollapsible=true</EuiCode>.
          </p>
          <p>
            When in <EuiCode>isCollapsible</EuiCode> mode, a{' '}
            <EuiCode>title</EuiCode> and{' '}
            <EuiCode language="ts">initialIsOpen:boolean</EuiCode> is required.
          </p>
        </>
      ),
      props: {
        EuiCollapsibleNavGroup,
      },
      demo: <CollapsibleNavGroup />,
      snippet: `<EuiCollapsibleNavGroup
  title="Nav group"
  iconType="logo"
  isCollapsible={true}
  initialIsOpen={true}
  background="none"
/>`,
    },
    {
      title: 'Nav groups with lists and other content',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: collapsibleNavListSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: collapsibleNavListHtml,
        },
      ],
      text: (
        <>
          <p>
            <strong>EuiCollapsibleNavGroups</strong> can contain any children.
            They work well with{' '}
            <Link to="/display/list-group">
              <strong>EuiListGroup, EuiPinnableListGroup</strong>
            </Link>{' '}
            and simple{' '}
            <Link to="/navigation/link">
              <strong>EuiText</strong>
            </Link>
            .
          </p>
          <p>Below are a few established patterns to use.</p>
        </>
      ),
      demo: <CollapsibleNavList />,
      snippet: `<EuiCollapsibleNavGroup
  title="Kibana"
  iconType="logoKibana"
  isCollapsible={true}
  initialIsOpen={true}>
  <EuiPinnableListGroup
    aria-label="Kibana"
    listItems={[
      { label: 'Discover' },
      { label: 'Visualize' }
    ]}
    onPinClick={() => {}}
    maxWidth="none"
    color="subdued"
    gutterSize="none"
    size="s"
  />
</EuiCollapsibleNavGroup>`,
    },
    {
      title: 'Full pattern with header and saved pins',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: collapsibleNavAllSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: collapsibleNavAllHtml,
        },
      ],
      text: (
        <>
          <h3>Putting it all together</h3>
          <p>
            The button below will launch a full screen example that includes{' '}
            <Link to="/layout/header">
              <strong>EuiHeader</strong>
            </Link>{' '}
            with a toggle button to open an <strong>EuiCollapsibleNav</strong>.
            The contents of which are multiple{' '}
            <strong>EuiCollapsibleNavGroups</strong> and saves the
            open/closed/pinned state for each section and item in local store.
          </p>
          <p>
            This is just a pattern and should be treated as such. Consuming
            applications will need to create the navigation groups according to
            their context and save the states as is appropriate to their data
            store.
          </p>
        </>
      ),
      demo: <CollapsibleNavAll />,
    },
  ],
};
