import Image from "next/image";

export function ProductImage({ src, alt, caption, priority = false }: { src: string | null; alt: string; caption?: string; priority?: boolean }) {
  return (
    <figure className="product-figure">
      <div className="product-image-frame">
        {src ? <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 800px) 100vw, 56vw" /> : <div className="product-preview-placeholder" role="img" aria-label={`Illustrative placeholder for ${alt.toLowerCase()}`}>
          <div className="preview-topbar"><span className="preview-brand"><i aria-hidden="true" />ZenSys</span><span>ILLUSTRATIVE PREVIEW</span></div>
          <div className="preview-content"><aside className="preview-sidebar"><i /><i /><i /><i /><i /></aside><div className="preview-workspace"><div className="preview-title"><b /><i /></div><div className="preview-metrics"><i /><i /><i /></div><div className="preview-panels"><i /><i /></div><div className="preview-table"><i /><i /><i /><i /></div></div></div>
        </div>}
      </div>
      {caption ? <figcaption>{src ? `${caption} · anonymized sample data` : "Real product screenshots will appear here after private details are removed."}</figcaption> : null}
    </figure>
  );
}
