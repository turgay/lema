'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import styles from './RubePage.module.css';

export default function RubePage() {
  const [htmlContent, setHtmlContent] = useState('');
  const params = useParams();

  useEffect(() => {
    const page = params?.page as string || '1';
    fetchPageContent(parseInt(page, 10));
  }, [params]);

  const fetchPageContent = (page: number) => {
    fetch(`/api/getHtmlContent?page=${page}`)
      .then(response => response.text())
      .then(content => {
        const fixedContent = content         
          .replace(/<b>(.*?)<\/b><br\/>/g, '<b>$1</b><p></p>')
          .replace(/\.<br\/>/g, '.<p/>')
          .replace(/<br\s*\/?>/g, ' ');
        setHtmlContent(fixedContent);
      })
      .catch(error => console.error('Error fetching HTML content:', error));
  };

  return (
    <div className={styles.bookPage}>
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </div>
  );
}