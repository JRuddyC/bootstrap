import React from "react";

const BlogContent = () => (
    <div className="p-3">
        <h1>Bienvenido a nuestro Blog</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec odio
            nisi. Proin a ligula non metus ornare vehicula ut eget augue. Quisque
            gravida at ex id vestibulum. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <img
            src="https://via.placeholder.com/800x400"
            alt="Imagen del Blog"
            className="img-fluid my-3"
        />
        <p>
            Curabitur lobortis purus id quam dignissim, nec fermentum elit volutpat.
            Fusce malesuada nisl eget felis dignissim, eget dictum lacus volutpat.
        </p>
        <img
            src="https://via.placeholder.com/800x400"
            alt="Otra Imagen del Blog"
            className="img-fluid my-3"
        />
        {/* Repetir texto e imágenes para generar scroll */}
        {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    odio nisi. Proin a ligula non metus ornare vehicula ut eget augue.
                </p>
                <img
                    src="https://via.placeholder.com/800x400"
                    alt={`Imagen del Blog ${i + 1}`}
                    className="img-fluid my-3"
                />
            </React.Fragment>
        ))}
    </div>
);

export default BlogContent