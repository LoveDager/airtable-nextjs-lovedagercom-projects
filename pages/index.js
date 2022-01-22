import React from 'react';
import Head from 'next/head';
import Airtable from 'airtable';
import Layout from '../components/layout';
import { Gridview2, Gridview3 } from '../components/gridview';
import { Projectitem2, Projectitem3 } from '../components/projectitem';

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_APIKEY,
  });

  const records = await airtable
    .base(process.env.AIRTABLE_BASE)('Projects')
    .select({
      fields: ['Name', 'Oneliner', 'Images', 'Long Description', 'Status', 'Link'],
    })
    .all();

  const projects = records.map((project) => {
    return {
      name: project.get('Name') || '',
      oneliner: project.get('Oneliner') || '',
      images: project.get('Images')?.map((image) => image.url) || [],
      description: project.get('Long Description') || '',
      status: project.get('Status') || '',
      link: project.get('Link') || '',
    };
  });

  return {
    props: {
      projects,
    },
  };
}

function Project({ name, oneliner, images, description, status, link }) {
  return (
    <div style={{ padding: '32px' }}>
      <div>
        <b>{name}</b>
      </div>
      <div>{oneliner}</div>
      {images.map((image) => (
        <img style={{ maxWidth: 200 }} key={image} src={image} alt={name} />
      ))}
      <div>${link}</div>
    </div>
  );
}

function Home({ projects }) {
  return (
    <Layout>
      <Gridview2>
        {projects.map((project) => (
            <Projectitem2
              key={project.name}
              name={project.name}
              oneliner={project.oneliner}
              images={project.images}
              description={project.description}
              status={project.status}
              link={project.link}
            />
          ))}
      </Gridview2>
      <Gridview3>
        {projects.map((project) => (
            <Projectitem3
              key={project.name}
              name={project.name}
              oneliner={project.oneliner}
              images={project.images}
              description={project.description}
              status={project.status}
              link={project.link}
            />
          ))}
      </Gridview3>
      
    </Layout>
  );
}

export default Home;
